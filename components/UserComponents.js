import React, {useCallback} from 'react';
import {Text, View, Linking, Button, styles} from 'react-native';
import {footer, body} from '../styles/AppStyles';
import {Header} from 'react-native-elements';

export const CopyRight1 = (props) => {
  const copyrightText1 = props.copyrightText1;
  const year1 = props.year1;
  const copystatement = copyrightText1 + ' ' + year1;

  return (
    <View>
      <Text style={footer.copyright}>
        {'\u00A9'} {copystatement}
      </Text>
    </View>
  );
};

export const MyButtonLinks = (props) => {
  const url1 = props.url1;
  const linkText1 = props.linkText1;
  const handlePress = useCallback(async () => {
    try {
      const validUrl = await Linking.canOpenURL(url1);
      if (validUrl) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url1);
        //} else {
        //console.log('invalidUrl');
      }
    } catch (err1) {
      //console.error(children);
      console.error(url1);
      throw err1;
    }
  }, [url1]);

  return <Button title={linkText1 ? linkText1 : ''} onPress={handlePress} />;
};

/**
export const MyDivider = (props) => {
  const {style, ...rest} = props;
  //return <View style={[style]} />;
  return <View style={[style]} {...rest} />;
};**/

export const MyHeader = () => {
  return (
    <Header
      // eslint-disable-next-line react-native/no-inline-styles
      containerStyle={{
        backgroundColor: 'purple',
        paddingVertical: '0%',
      }}
      centerComponent={{
        text: "Wendy's Mobile App",
        style: {color: 'white', fontSize: 16, textAlign: 'justify'},
      }}
    />
  );
};
export const ErrorPage = () => {
  return (
    <View>
      <Text id="error" style={body.error}>
        Something Went Wrong
      </Text>
    </View>
  );
};
