#
# Comment IV 
#    Copyright 2016 Kary Foundation, Inc.
#    Author: Pouya Kary <k@karyfoundation.org>
#

echo "Bulding Comment IV"

# Compiling the Code
echo "-> Compiling the Core"
tsc
echo "   [ done ]"

# Minifing the Code
echo "-> Minifing the Core"
uglifyjs -m -o resources/core.js resources/core.js
echo "   [ done ]"

# Bulding the Style Sheets
echo "-> Builing the Style Sheets"
lessc styles/styles.less resources/styles.css
echo "   [ done ]"

# Copying the Resource Files
echo "-> Copying the files"
for file in resources/*
do 
	echo "    -> Copying ${file}"
	name=${file##*/}
	#cp $file "Comment IV/${name}"
 	cp $file "/Applications/Comment IV.app/Contents/Resources/${name}"
done
echo "   [ done ]"

# Compiling the Swift View
#echo "-> Compiling the Swift View"
#xcodebuild -list -project "Comment IV.xcodeproj"
#echo "   [ done ]"


# Done
echo "Finished"