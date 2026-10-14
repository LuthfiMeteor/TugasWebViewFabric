import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#4A90E2" />
      {/* Header Aplikasi */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Portal Kampus - Fabric WebView</Text>
      </View>
      {/* Komponen WebView Fabric */}
      <View style={styles.webViewContainer}>
        <WebView
          source={{ uri: 'https://example.com' }}
          style={styles.flexOne}
          javaScriptEnabled={true}
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: 60,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  headerText: {
    color: '#ffffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  webViewContainer: {
    flex: 1,
  },
  flexOne: {
    flex: 1,
  },
});
