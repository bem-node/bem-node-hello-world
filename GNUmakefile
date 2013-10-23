.PHONY: all
all:: clean
all:: install
all:: rebuild

#remove builded files
.PHONY: clean
clean::
	rm -f `find ./app/*/* ! -name '*bemdecl.js'`

#install dependenses
.PHONY: install
install::
	npm install

#rebuild project (use it when adding new files)
.PHONY: rebuild
rebuild::
	./node_modules/enb/bin/enb make
