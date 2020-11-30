** WIP -- imporve layout and adding jest test and optimize calls and clean up modules....

Useful tips : 

IOS related : 

1. manually install mobile apps on simulator : 

  example : 

xcrun simctl install FAB84CB9-585F-4B2A-9790-8AF3724539DE ./mymobile2.app


2. find out simulator related information  (including device id) : 

   xcrun simctl list


React native related : 

  npx react-native doctor : to find out issues

  react-native run ios --simulator "iPhone 11"

  (after having installed ios-deploy : npm install -g ios-deploy)

  react-native run-ios --device "device name"

(.ipa or .app)

(list and change the npm global default location and expose the default locations....)


To DO : xcode and swift :  get more knowledge inside the ios natives
   https://developer.apple.com/forums/thread/95631

https://www.upwork.com/resources/swift-vs-objective-c-a-look-at-ios-programming-languages#:~:text=Swift%20is%20easier%20to%20read,has%20a%20more%20clunky%20syntax.&text=Also%2C%20Swift%20requires%20less%20code,interpolation%2C%20without%20placeholders%20or%20tokens.

https://medium.com/hackernoon/react-native-bridge-for-ios-and-android-43feb9712fcb



Android : 

https://developer.android.com/studio/run/emulator

manually install apk file : 

 adb install ./xxx.apk

(adb under platform-tools)

(sdkmanager, avdmanager)


--

workaround for the SHA1 error : 

https://www.gitmemory.com/issue/facebook/metro/330/487233816

install apk on emulator : bring up the emulator first under android studio

yarn android

---

https://stackoverflow.com/questions/35463547/what-is-the-quickest-way-to-convert-a-react-app-to-react-native#:~:text=6%20Answers&text=You%20cannot%20just%20use%20your,most%20of%20the%20help%20here.

--

View Libraries : 

https://reactnative.dev/docs/linking


Core components : 

  https://reactnative.dev/docs/components-and-apis

Libraries : 
  https://reactnative.dev/docs/libraries : 

     https://reactnative.directory/
    
     https://github.com/react-native-community/

     https://docs.expo.io/versions/latest/

Popular open source packages : 
  https://reactnative.dev/docs/components-and-apis

Examples : 

displaying svg image : 
https://aboutreact.com/react-native-image/
https://dev.to/vinipachecov/how-to-use-svg-files-in-react-native-with-typescript-1bn7

submit form : 
https://whatdidilearn.info/2018/12/16/react-native-how-to-implement-a-simple-input-form.html

https://stackoverflow.com/questions/59651209/how-to-test-textinput-with-onkeypress

Common react-native UI elements : 

 https://reactnativeelements.com/docs/input/

 https://github.com/callstack/react-native-paper/blob/master/example/src/Examples/DataTableExample.tsx

https://www.npmjs.com/package/react-native-table-component


Hooks : 

  https://daveceddia.com/usestate-hook-examples/

  https://dev.to/spukas/3-reasons-to-usereducer-over-usestate-43ad

  https://leewarrick.com/blog/a-guide-to-usestate-and-usereducer/

  https://www.aboutmonica.com/blog/2020-04-04-refactoring-use-state-to-use-reducer

  https://dev.to/dtroyano86/how-to-build-a-form-in-react-with-usereducer-3o3a

  https://www.robinwieruch.de/react-usereducer-hook

  https://www.freecodecamp.org/news/build-a-react-hooks-front-end-app-with-routing-and-authentication/

  https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
  https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers

  https://usehooks.com/

  https://www.digitalocean.com/community/tutorials/react-usecontext

  https://nikgrozev.com/2019/04/07/reacts-usecallback-and-usememo-hooks-by-example/

  https://dev.to/devcord/react-hooks-useeffect-usecallback-usememo-3o42

  https://leewarrick.com/blog/react-use-effect-explained/

  https://medium.com/@infinitypaul/reactjs-useeffect-usecallback-simplified-91e69fb0e7a3

  https://dmitripavlutin.com/dont-overuse-react-usecallback/
  https://dev.to/dinhhuyams/introduction-to-react-memo-usememo-and-usecallback-5ei3
  https://stackoverflow.com/questions/58579426/in-useeffect-whats-the-difference-between-providing-no-dependency-array-and-an 

useXXXX : customerized hooks to abstrat state management away from component

React native : dynamic get element without event.target : 

  https://forums.expo.io/t/what-is-react-native-s-replacement-of-react-s-e-target-innertext/20908

 https://www.npmjs.com/package/react-native-form-validator

 https://github.com/perscrew/react-native-form-validator/blob/HEAD/test/formTest.js


event : 
   https://levelup.gitconnected.com/how-exactly-does-react-handles-events-71e8b5e359f2

javascript : 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

Styling cheatsheets : 

https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c

https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c
--

Testing : keyboard seems only work with test emulator for android

https://www.testim.io/blog/react-native-unit-testing/

---

Javascript : 

https://jscomplete.com/learn/javascript-for-react

https://medium.com/@leannezhang/curly-braces-versus-parenthesis-in-reactjs-4d3ffd33128f
 
--

examples : 

  https://stackoverflow.com/questions/40665370/react-native-what-is-a-proper-way-to-pass-style-as-props-when-using-spread-ope

--

Android : 

  yarn start --reset-cache  
  react-native run-android (May need to clear old data usng android studio -- avd manager

rm -rf node_modules && yarn  (to try to resolve issues)
--

MAC : 

  brew doctor

 
---

Firebase : 

---

ionic vs react-native

--

Limitations : 

  https://www.simform.com/react-native-limitations-app-development/





 

  
# reactnativeWIP
