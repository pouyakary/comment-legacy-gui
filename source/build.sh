#
# Comment IV
#    Copyright 2016 Kary Foundation, Inc.
#    Author: Pouya Kary <k@karyfoundation.org>
#

#
# ─── COMPILING THE CORE ─────────────────────────────────────
#

	echo "─ ─── COMPILING ──────────────────────────────────────────────"

	tsc

#
# ─── MINFING THE CORE ───────────────────────────────────────
#

	echo "─ ─── MINIFING ───────────────────────────────────────────────"

	#uglifyjs -m -o binary/core.js binary/core.js

#
# ─── COMPILING STYLE SHEETS ─────────────────────────────────
#

	echo "─ ─── COMPILING STYLES SHEETS ────────────────────────────────"

	lessc styles/styles.less binary/styles.css

#
# ─── COPYING THE RESOURCE FILES ─────────────────────────────
#

	echo "─ ─── COPYING FILES ──────────────────────────────────────────"

	function copy-to-binary {
		echo "  --> copying files from: ${1}"
		for file in ${1}/*
		do
			name=${file##*/}
			cp $file "binary/${name}"
		done
    }

	copy-to-binary resources
	copy-to-binary electron

	cp icon/png/Icon-256x256.png binary/header-icon.png

# ──────────────────────────────────────────────────────────