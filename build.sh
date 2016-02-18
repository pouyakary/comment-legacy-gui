
echo "Bulding Comment IV"

# Compiling the Code
echo "--> Compiling the Core"
tsc
echo "    [ done ]"

# Minifing the Code
echo "--> Minifing the Core"
uglifyjs -m -o Resources/Comment.js Resources/Comment.js
echo "    [ done ]"

# Bulding the Style Sheets
echo "--> Builing the Style Sheets"
lessc Styles/Styles.less Resources/styles.css
echo "    [ done ]"

# Copying the Resource Files
for file in Resources/*
do 
	echo " -> Copying ${file}"
	name=${file##*/}
	cp $file "Comment IV/${name}"
	echo "    [ done ]"
done
