#
# Comment IV 
#    Copyright 2016 Kary Foundation, Inc.
#    Author: Pouya Kary <k@karyfoundation.org>
#

#
# ─── COMPILING THE CORE ─────────────────────────────────────
#

	tsc
	
#
# ─── MINFING THE CORE ───────────────────────────────────────
#

	uglifyjs -m -o binary/core.js binary/core.js

#
# ─── COMPILING STYLE SHEETS ─────────────────────────────────
#

	lessc styles/styles.less binary/styles.css

#
# ─── COPYING THE RESOURCE FILES ─────────────────────────────
#

	for file in resources/*
	do 
		name=${file##*/}
		cp $file "binary/${name}"
	done
	
	for file in electron/*
	do 
		name=${file##*/}
		cp $file "binary/${name}"
	done

#
# ─── RUN ELECTRON ──────────────────────────────────────────
#

	cd "./binary"
	npm start
	cd ".."

# ──────────────────────────────────────────────────────────
