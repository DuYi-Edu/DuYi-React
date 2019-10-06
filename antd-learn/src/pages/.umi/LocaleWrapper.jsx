import React from 'react';


const baseNavigator = true;
const baseSeparator = '-';
const useLocalStorage = true;

import { LocaleProvider, version } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
let defaultAntd = require('antd/lib/locale-provider/zh_CN');
defaultAntd = defaultAntd.default || defaultAntd;

const localeInfo = {
};

class LocaleWrapper extends React.Component{
  state = {
    locale: 'zh-CN',
  };
  getAppLocale(){
    let appLocale = {
      locale: 'zh-CN',
      messages: {},
      data: require('react-intl/locale-data/zh'),
      momentLocale: 'zh-cn',
    };

    const runtimeLocale = require('umi/_runtimePlugin').mergeConfig('locale') || {};
    const runtimeLocaleDefault =  typeof runtimeLocale.default === 'function' ? runtimeLocale.default() : runtimeLocale.default;
    if (
      useLocalStorage
      && typeof localStorage !== 'undefined'
      && localStorage.getItem('umi_locale')
      && localeInfo[localStorage.getItem('umi_locale')]
    ) {
      appLocale = localeInfo[localStorage.getItem('umi_locale')];
    } else if (
      typeof navigator !== 'undefined'
      && localeInfo[navigator.language]
      && baseNavigator
    ) {
      appLocale = localeInfo[navigator.language];
    } else if(localeInfo[runtimeLocaleDefault]){
      appLocale = localeInfo[runtimeLocaleDefault];
    } else {
      appLocale = localeInfo['zh-CN'] || appLocale;
    }
    window.g_lang = appLocale.locale;
    window.g_langSeparator = baseSeparator || '-';

    // support dynamic add messages for umi ui
    // { 'zh-CN': { key: value }, 'en-US': { key: value } }
    const runtimeLocaleMessagesType = typeof runtimeLocale.messages;
    if (runtimeLocaleMessagesType === 'object' || runtimeLocaleMessagesType === 'function') {
      const runtimeMessage = runtimeLocaleMessagesType === 'object'
        ? runtimeLocale.messages[appLocale.locale]
        : runtimeLocale.messages()[appLocale.locale];
      Object.assign(appLocale.messages, runtimeMessage || {});
    }

    return appLocale;
  }
  reloadAppLocale = () => {
    const appLocale = this.getAppLocale();
    this.setState({
      locale: appLocale.locale,
    });
  };

  render(){
    const appLocale = this.getAppLocale();
    // react-intl must use `-` separator
    const reactIntlLocale = appLocale.locale.split(baseSeparator).join('-');
    const LangContextValue = {
      locale: reactIntlLocale,
      reloadAppLocale: this.reloadAppLocale,
    };
    let ret = this.props.children;
     // avoid antd ConfigProvider not found
     let AntdProvider = LocaleProvider;
     const [major, minor] = `${version || ''}`.split('.');
     // antd 3.21.0 use ConfigProvider not LocaleProvider
     const isConfigProvider = Number(major) > 3 || (Number(major) >= 3 && Number(minor) >= 21);
     if (isConfigProvider) {
       try {
         AntdProvider = require('antd/lib/config-provider').default;
       } catch (e) {}
     }

     return (<AntdProvider locale={appLocale.antd ? (appLocale.antd.default || appLocale.antd) : defaultAntd}>
      {ret}
    </AntdProvider>);
    return ret;
  }
}
export default LocaleWrapper;
