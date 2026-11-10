import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';

const App = () => {
  const webViewRef = useRef<WebView<{}>>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  // Handle tombol back
  useEffect(() => {
    const onBackPress = () => {
      if (webViewRef.current && canGoBack) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };

    const backHandlerSubscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => backHandlerSubscription.remove();
  }, [canGoBack]);

  const handlePrev = () => {
    if (webViewRef.current && canGoBack) {
      webViewRef.current.goBack();
    }
  };

  const handleNext = () => {
    if (webViewRef.current && canGoForward) {
      webViewRef.current.goForward();
    }
  };

  const handleReload = () => {
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Header Aplikasi */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Website Unla - Fabric WebView</Text>
      </View>

      {/* Komponen WebView Fabric */}
      <View style={styles.webViewContainer}>
        <WebView<{}>
          ref={webViewRef}
          source={{ uri: 'https://www.unla.ac.id' }}
          style={styles.flexOne}
          javaScriptEnabled={true}
          startInLoadingState={true}
          onNavigationStateChange={(navState: WebViewNavigation) => {
            setCanGoBack(navState.canGoBack);
            setCanGoForward(navState.canGoForward);
          }}
        />
      </View>

      {/* Toolbar NavigasiPrev, Reload, Next */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[styles.button, !canGoBack && styles.buttonDisabled]}
          onPress={handlePrev}
          disabled={!canGoBack}
          activeOpacity={0.7}
        >
          <Text
            style={[styles.buttonText, !canGoBack && styles.buttonTextDisabled]}
          >
            Prev
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleReload}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Reload</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, !canGoForward && styles.buttonDisabled]}
          onPress={handleNext}
          disabled={!canGoForward}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.buttonText,
              !canGoForward && styles.buttonTextDisabled,
            ]}
          >
            Next
          </Text>
        </TouchableOpacity>
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
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  webViewContainer: {
    flex: 1,
  },
  flexOne: {
    flex: 1,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    elevation: 8,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: '#4A90E2',
    minWidth: 85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#D1D5DB',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonTextDisabled: {
    color: '#9CA3AF',
  },
});
