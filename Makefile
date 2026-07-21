# --- Variables ---
PM := pnpm
BACKEND := $(PM) --filter backend-api
FRONTEND := $(PM) --filter frontend-ui
DOCKER_COMPOSE := docker compose

.PHONY: up backend frontend build start migrate generate studio seed clean-seed db db-sync lint format test test-watch coverage storybook openapi docker-up docker-down docker-db docker-logs docker-build docker-clean help

# --- Application Services ---

up: ## Run both frontend and backend concurrently in dev mode
	$(PM) --parallel --filter backend-api --filter frontend-ui dev

backend: ## Run only the backend in dev mode
	$(PM) serve:api

frontend: ## Run only the frontend in dev mode
	$(PM) serve:frontend

frontend-local: ## Run frontend with local backend configuration
	$(PM) serve:frontend:localbe

storybook: ## Run Storybook
	$(PM) storybook

# --- Docker Commands ---

docker-up: ## Start all Docker containers in background
	$(DOCKER_COMPOSE) up -d

docker-db: ## Start only the database container in Docker
	$(DOCKER_COMPOSE) up -d db

docker-down: ## Stop and remove all Docker containers
	$(DOCKER_COMPOSE) down

docker-logs: ## View and tail logs for all containers
	$(DOCKER_COMPOSE) logs -f

docker-build: ## Build or rebuild Docker images
	$(DOCKER_COMPOSE) build

docker-clean: ## Stop containers and delete all volumes (hard reset)
	$(DOCKER_COMPOSE) down -v

# --- Build & Production ---

build: ## Build backend project for production
	$(BACKEND) build

start: ## Start production backend server
	$(BACKEND) start:prod

# --- Database Setup & Prisma ---

db: db-sync seed ## Full database setup (generate + migrate + seed)

db-sync: generate migrate ## Generate Prisma client and run migrations

migrate: ## Run database migrations
	$(PM) db:migrate

generate: ## Generate Prisma client
	$(PM) db:generate

studio: ## Open Prisma Studio UI
	$(PM) db:studio

seed: ## Seed the database
	$(PM) seed

clean-seed: ## Clean and re-seed the database
	$(BACKEND) seed:clean

# --- Quality Control ---

lint: ## Fix ESLint issues
	$(PM) lint:fix

format: ## Run Prettier across workspace
	$(PM) format

test: ## Run test suite
	$(PM) test

test-watch: ## Run tests in watch mode
	$(PM) test:watch

coverage: ## Generate test coverage report
	$(PM) test:coverage

# --- Documentation ---

openapi: ## Generate OpenAPI/Swagger docs
	$(BACKEND) openapi:generate

# --- Helpers ---

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-18s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help