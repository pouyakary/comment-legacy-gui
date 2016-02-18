
echo "Bulding Comment IV"

# Compiling the Code
echo "--> Compiling the Core"
tsc
echo "    [ done ]"

# Minifing the Code
echo "--> Minifing the Core"
uglifyjs comment.js --o "Comment IV/comment.min.js" -m
echo "    [ done ]"


