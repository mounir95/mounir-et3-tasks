import {observable, runInAction} from 'mobx';
import {TTrans} from '../interfaces/interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getLanguageStore: TTrans = {
  language: observable.box<string>('ENG'),
  LG: {
    addpage: {
      AR: 'صفحة الإضافة',
      ENG: 'ADD Page',
    },
    excelpage: {
      AR: 'PR صفحة النتائج',
      ENG: 'PR Result Page',
    },
    arlang: {
      AR: 'العربية',
      ENG: 'ARABIC',
    },
    enlang: {
      AR: 'الإنكليزية',
      ENG: 'ENGLISH',
    },
    addtext: {
      AR: 'اضافه',
      ENG: 'ADD',
    },
    closetext: {
      AR: 'اغلاق',
      ENG: 'Close',
    },
    donetext: {
      AR: 'تم',
      ENG: 'Done',
    },
    nexttext: {
      AR: 'التالي',
      ENG: 'Next',
    },
    platformtext: {
      AR: 'منصه ',
      ENG: 'Platform',
    },
    setext: {
      AR: 'SE قائمة',
      ENG: 'SE List',
    },
    dificulitytext: {
      AR: 'صعوبات ',
      ENG: 'Dificulity',
    },
    sizetext: {
      AR: 'حجم',
      ENG: 'Size',
    },
    statustext: {
      AR: 'قائمة الحالة',
      ENG: 'Status List',
    },
    prcount: {
      AR: 'عدد PRS هو: ',
      ENG: 'The PRS Count is : ',
    },
    checktable: {
      AR: 'تحقق من الجدول المشكلات',
      ENG: 'Check the table Issue',
    },
    sortbydate: {
      AR: 'صنف حسب التاريخ: ',
      ENG: 'Sort By Date: ',
    },
    searchbycomment: {
      AR: 'البحث عن طريق التعليقات',
      ENG: 'Search By Comments',
    },
    searchbystatus: {
      AR: 'البحث عن قائمة الحالة: ',
      ENG: 'Status List Filter: ',
    },
    searchbyse: {
      AR: 'البحث عن SE_List :',
      ENG: 'SE_List Filter: ',
    },
    searchbyplatform: {
      AR: 'البحث عن المنصة: ',
      ENG: 'Platform Filter: ',
    },
    showpicker: {
      AR: 'إظهار منتقي',
      ENG: 'Show Picker',
    },
    byapprove: {
      AR: 'BY موافقة:',
      ENG: 'BY Approve:',
    },
    ahapprove: {
      AR: 'AH موافقة:',
      ENG: 'AH Approve:',
    },
    htapprove: {
      AR: 'HT موافقة:',
      ENG: 'HT Approve:',
    },
    pleaseselect: {
      AR: 'الرجاء اختيار ',
      ENG: 'Please select a ',
    },
    required: {
      AR: 'مطلوب',
      ENG: 'Required',
    },
    releaseversion: {
      AR: 'النسخة الصادرة',
      ENG: 'Release Version',
    },
    comment: {
      AR: 'التعليق',
      ENG: 'Comment',
    },
    prlink: {
      AR: 'رابط PR',
      ENG: 'PR_LINK',
    },
    desc: {
      AR: 'تنازلي',
      ENG: 'desc',
    },
    asc: {
      AR: 'تصاعدي',
      ENG: 'asc',
    },
    arrayofsort: {
      AR: ['تصاعدي', 'تنازلي'],
      ENG: ['asc', 'desc'],
    },
    excelcol: {
      AR: [
        {name: 'التاريخ'},
        {name: 'SE قائمة'},
        {name: '#'},
        {name: 'منصه '},
        {name: 'النسخة الصادرة'},
        {name: 'التعليق'},
        {name: 'PR رابط'},
        {name: 'حجم'},
        {name: 'صعوبات '},
        {name: 'قائمة الحالة'},
        {name: 'تمت مراجعته (BY)'},
        {name: 'تمت مراجعته (AH)'},
        {name: 'تمت مراجعته (HT)'},
        {name: ''},
        {name: ''},
      ],
      ENG: [
        {name: 'Date'},
        {name: 'SE_List'},
        {name: '#'},
        {name: 'Platform'},
        {name: 'Release Version'},
        {name: 'Comment'},
        {name: 'PR_Link'},
        {name: 'Size'},
        {name: 'Difiiculity'},
        {name: 'Status List'},
        {name: 'Reveiwed By BY'},
        {name: 'Reveiwed By AH'},
        {name: 'Reveiwed By HT'},
        {name: ''},
        {name: ''},
      ],
    },
  },

  setLanguage(language: string) {
    runInAction(() => {
      this.language.set(language);
      const setData = async () => {
        await AsyncStorage.setItem('language', language);
      };
      setData();
    });
  },

  get(message: string) {
    const language = this.language.get();
    return this.LG[message] === undefined ||
      this.LG[message][language] === undefined
      ? message
      : this.LG[message][language];
  },
};

export default getLanguageStore;
