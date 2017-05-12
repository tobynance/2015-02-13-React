import os

def runBrowserify (inputFile, outputFile):
    BABEL_BUILDER = 'browserify -d "{inputFile}" -o "{outputFile}" -t [ babelify ] '.format(inputFile=inputFile, outputFile=outputFile)
    # print(BABEL_BUILDER)
    os.system(BABEL_BUILDER)

# runBrowserify("excercises/1-your-first-component/app.js", "excercises/1-your-first-component/app-bundled.js")
# runBrowserify("excercises/2-props/app.js", "excercises/2-props/app-bundled.js")
# runBrowserify("excercises/3-events-and-state/app.js", "excercises/3-events-and-state/app-bundled.js")
# runBrowserify("excercises/4-props-v-state/app.js", "excercises/4-props-v-state/app-bundled.js")
runBrowserify("excercises/5-flux/app.js", "excercises/5-flux/app-bundled.js")
# runBrowserify("excercises/6-routing/app.js", "excercises/6-routing/app-bundled.js")
# runBrowserify("excercises/7-migrations-to-react/app.js", "excercises/7-migrations-to-react/app-bundled.js")
