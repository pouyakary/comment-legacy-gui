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
uglifyjs -m -o Resources/Comment.js Resources/Comment.js
echo "   [ done ]"

# Bulding the Style Sheets
echo "-> Builing the Style Sheets"
lessc Styles/Styles.less Resources/Styles.css
echo "   [ done ]"

# Copying the Resource Files
echo "-> Copying the files"
for file in Resources/*
do 
	echo "    -> Copying ${file}"
	name=${file##*/}
	cp $file "Comment IV/${name}"
 	cp $file "/Applications/Comment IV.app/Contents/Resources/${name}"
done
echo "   [ done ]"

# Compiling the Swift View
#echo "-> Compiling the Swift View"
#xcodebuild -list -project "Comment IV.xcodeproj"
#echo "   [ done ]"


# Done
echo "Finished"