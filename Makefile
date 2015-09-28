all: build

# NPM packages and options
CLEAN_CSS = node_modules/.bin/cleancss
UGLIFY_JS = node_modules/.bin/uglifyjs
UGLIFY_OPTS = --screw-ie8
AUTOPREFIXER = node_modules/.bin/autoprefixer
AUTOPREFIXER_BROWSERS = last 2 ios version, last 2 ff version, last 2 chrome version, last 2 and_chr version

# Submodule target
GUI_SUBMODULE = lib/blog-prototype/index.html

# "Randomize" file names for JavaScript and CSS using a timestamp
RANDOM_NAME := build-$(shell date "+%Y%m%d%H%M%S")
BUNDLE_JS = gui/js/$(RANDOM_NAME).js
BUNDLE_CSS = gui/css/$(RANDOM_NAME).css

# Remote host config
-include = site_config.mk

# New draft config
TOPIC ?= new article
FILE = $(shell date "+./_drafts/%Y-%m-%d-$(TOPIC).markdown" | sed -e y/\ /-/ | awk "{print tolower($0)}")

$(CLEAN_CSS):
	npm install

$(UGLIFY_JS):
	npm install

$(AUTOPREFIXER):
	npm install

$(GUI_SUBMODULE):
	git submodule update --init --remote

data-gui:
	mkdir -p _data
	touch _data/gui.yml

create-gui-folder: clean
	mkdir gui

copy-gui-assets: $(GUI_SUBMODULE) create-gui-folder
	cp -a lib/blog-prototype/gui/** gui/

build: $(CLEAN_CSS) $(AUTOPREFIXER) $(UGLIFY_JS) copy-gui-assets data-gui
	find gui/css -name '*.css' -not -name '$(RANDOM_NAME).css' -not -name 'ie.css' -exec cat {} \; | $(CLEAN_CSS) --skip-rebase -o $(BUNDLE_CSS) ;\
	find gui/css -name '*.css' -not -name '$(RANDOM_NAME).css' -not -name 'ie.css' | xargs rm ;\
	$(AUTOPREFIXER) -b "$(AUTOPREFIXER_BROWSERS)" $(BUNDLE_CSS) ;\
	$(UGLIFY_JS)  gui/js/*.js -o $(BUNDLE_JS) $(UGLIFY_OPTS);\
	find gui/js -name '*.js' -not -name '$(RANDOM_NAME).js' | xargs rm ;\
	echo '$(RANDOM_NAME)' > _data/gui.yml

clean:
	rm -rf gui

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

# Push site to live
push:
	rsync -Pavz --delete -e ssh _site/* $(REMOTE)

# Push site to live (test)
test-push:
	rsync -Pavz --delete --dry-run -e ssh _site/* $(REMOTE)

# Deploy (build css, generate jekyll & then push)
deploy: build jekyll-build push

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
