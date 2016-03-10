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
# ─── ELECTRON PACKAGER ──────────────────────────────────────
#
	
	electron-packager ./binary "Comment IV" --platform=darwin --arch=x64 --app-copyrigh="Copyright 2016 by Kary Foundation, Inc." --app-version="IV.2.107" --icon=icon/icns/icon.icns --name="Comment IV" --out=release --overwrite=true
	
#
# ─── RUN ELECTRON ──────────────────────────────────────────
#

	cd "./binary"
	npm start
	cd ".."

# ──────────────────────────────────────────────────────────
