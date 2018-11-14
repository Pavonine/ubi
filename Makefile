PATH := node_modules/.bin:$(PATH)
SHELL := /bin/bash

SRC = $(wildcard src/*.js)
BUILD = $(SRC:src/%.js=build/%.js)

BUILD: $(BUILD)
build/%.js: src/%.js .babelrc
	mkdir -p $(@D);
	babel $< -o $@;