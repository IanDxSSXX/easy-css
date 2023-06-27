packages=$(jq -r ".packages // [] | map(\"\(.)\") | join(\" \")" package.json)
for package in $packages
do
    len=$(expr ${#1} + ${#package} + 24)
    dash=""
    for i in $(seq 0 $((len-1))); do
        dash="${dash}-"
    done
    echo "\033[35m ┌${dash}┐\033[0m"
    echo "\033[35m |    $1ing package $package....    |\033[0m"
    echo "\033[35m └${dash}┘\033[0m"
    sh ./scripts/$1.sh "./packages/$package"
done
