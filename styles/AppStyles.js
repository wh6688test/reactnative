import {StyleSheet, Platform} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
//import normalize from 'react-native-normalize';

export const top = StyleSheet.create({
  container: {
    fontSize: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    textDecorationColor: 'yellow',
    textShadowColor: 'red',
    textShadowRadius: 1,
    margin: 24,
  },
});

export const mydivider = StyleSheet.create({
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export const footer = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    margin: 2,
  },
  buttonView: {
    width: '50%',
    height: '30%',
  },

  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '2%',
  },

  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: '5%',
    marginTop: '2%',
    marginBottom: '2%',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2%',
  },

  text: {
    color: 'red',
    textAlign: 'center',
  },

  copyright: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'lightgrey',
  },
});

export const body = StyleSheet.create({
  container: {
    flex: 4,
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 30,
  },
});

export const head = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: 'grey',
    marginBottom: '1%',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: 'grey',
    marginBottom: '1%',
  },
  title: {
    fontSize: 10,
    textAlign: 'justify',
  },
  button: {
    width: '100%',
    marginBottom: '6%',
    alignItems: 'center',
    alignContent: 'stretch',
  },
  input: {
    minWidth: '100%',
    paddingVertical: '2%',
    paddingHorizontal: 1,
    borderBottomWidth: 1,
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    ...Platform.select({
      ios: {
        marginTop: 2,
        marginBottom: 0,
      },
      android: {
        marginTop: 1,
        marginBottom: 0,
      },
    }),
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
  },
});

export const datatable1 = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  border: {borderWidth: 2, borderColor: '#c8e1ff'},
});

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
