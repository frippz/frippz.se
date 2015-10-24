all: build

# Remote host config
-include = site_config.mk

# New draft config
TOPIC ?= new article
FILE = $(shell date "+./_drafts/%Y-%m-%d-$(TOPIC).markdown" | sed -e y/\ /-/ | awk "{print tolower($0)}")

serve:
	jekyll serve

jekyll-build:
	jekyll build

jekyll-watch:
	jekyll build --watch

# Create a new post with current date
new:
	echo "---" >> $(FILE)
	echo "title: $(TOPIC)" >> $(FILE)
	echo "layout: post" >> $(FILE)
	echo "published: $(shell date +\"%Y-%m-%d\")" >> $(FILE)
	echo "---" >> $(FILE)

# Sync from prototype dist
sync:
	rsync -avz --delete $(PROTO_GUI) gui

# Push site to live
push:
	rsync -avz --delete -e ssh _site/* $(REMOTE)

# Push site to live (test)
test-push:
	rsync -avz --delete --dry-run -e ssh _site/* $(REMOTE)

# Deploy (generate jekyll & then push)
deploy: jekyll-build push

# Help
help:
	@echo "You may provide several parameters, like:"
	@echo "make [target] KEY=\"value\""
	@echo ""
	@echo "The following parameters are available (with the defaults): "
	@echo "REMOTEHOST=$(REMOTEHOST)"
	@echo "REMOTEDIR=$(REMOTEDIR)"
	@echo ""
	@echo "You may provide the TOPIC variable to the 'new' target."
	@echo ""
