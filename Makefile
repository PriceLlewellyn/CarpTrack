# Variables
PM := pnpm
# This targets the 'name' field in your backend package.json
BACKEND := $(PM) --filter backend-api

.PHONY: dev build start test lint format studio migrate generate seed clean-seed help

# --- Execution ---

dev: ## Run the backend in development mode with SWC
	$(BACKEND) dev

build: ## Build the project for production
	$(BACKEND) build

start: ## Start the production build
	$(BACKEND) start:prod

# --- Database / Prisma ---

migrate: ## Run database migrations
	$(BACKEND) prisma:migrate

generate: ## Generate Prisma client
	$(BACKEND) prisma:generate

studio: ## Open Prisma Studio
	$(BACKEND) prisma:studio

seed: ## Seed the database
	$(BACKEND) seed

clean-seed: ## Clean and re-seed the database
	$(BACKEND) seed:clean

db-sync: ## Generate client and run migrations
	$(BACKEND) prisma:generate
	$(BACKEND) prisma:migrate

# --- Quality Control ---

lint: ## Run ESLint
	$(BACKEND) lint:fix

format: ## Run Prettier
	$(BACKEND) format

test: ## Run all tests using Vitest
	$(BACKEND) test

test-watch: ## Run tests in watch mode
	$(BACKEND) test:watch

coverage: ## Run test coverage
	$(BACKEND) test:coverage

# --- Documentation ---

openapi: ## Generate OpenAPI/Swagger documentation
	$(BACKEND) openapi:generate

# --- Helpers ---

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help