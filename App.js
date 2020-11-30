/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, View, StatusBar} from 'react-native';

import {MyButtonLinks, CopyRight1, MyHeader} from './components/UserComponents';

import MainForm1 from './components/MainForm1';

import {styles, footer, mydivider, head} from './styles/AppStyles';

//import MySvg1 from './assets/imgs/my.svg';
//import chart1 from './assets/imgs/chart1.png';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="always">
            
          <View style={head.title}>
            <MyHeader />
          </View>
          <MainForm1 />
          <View style={footer.bottom}>
          <View style={footer.row}>
            <View style={footer.leftContainer}>
              <MyButtonLinks
                style={footer.buttonView}
                url1="https://google.com"
                linkText1="search"
              />
            </View>
            <View style={footer.rightContainer}>
              <CopyRight1 copyrightText1="WHSU" year1="2020" />
            </View>
          </View>
          <View style={mydivider.divider} />
          </View>
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
