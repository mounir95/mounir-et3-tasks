import AsyncStorage from '@react-native-async-storage/async-storage';
import {memoize} from 'lodash';
import {observable, runInAction} from 'mobx';
import {TLanguageObj} from '../interfaces/interfaces';

class LanguageStore {
  language = observable.box<string>('EN');
  translatedlang = observable.box<TLanguageObj>({
    addpage: 'ADD Page',
    excelpage: 'PR Result Page',
    arlang: 'ARABIC',
    enlang: 'ENGLISH',
    addtext: 'ADD',
    closetext: 'Close',
    donetext: 'Done',
    nexttext: 'Next',
    platformtext: 'Platform',
    setext: 'SE List',
    dificulitytext: 'Dificulity',
    sizetext: 'Size',
    statustext: 'Status List',
    prcount: 'The PRS Count is : ',
    checktable: 'Check the table Issue',
    sortbydate: 'Sort By Date: ',
    searchbycomment: 'Search By Comments',
    searchbystatus: 'Status List Filter: ',
    searchbyse: 'SE_List Filter: ',
    searchbyplatform: 'Platform Filter: ',
    showpicker: 'Show Picker',
    byapprove: 'BY Approve:',
    ahapprove: 'AH Approve:',
    htapprove: 'HT Approve:',
    pleaseselect: 'Please select a ',
    required: 'Required',
    releaseversion: 'Release Version',
    comment: 'Comment',
    prlink: 'PR_LINK',
    desc: 'desc',
    asc: 'asc',
    arrayofsort: ['asc', 'desc'],
    excelcol: [
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
    ]
  });
  englishobject = observable.box<TLanguageObj>({
    addpage: 'ADD Page',
    excelpage: 'PR Result Page',
    arlang: 'ARABIC',
    enlang: 'ENGLISH',
    addtext: 'ADD',
    closetext: 'Close',
    donetext: 'Done',
    nexttext: 'Next',
    platformtext: 'Platform',
    setext: 'SE List',
    dificulitytext: 'Dificulity',
    sizetext: 'Size',
    statustext: 'Status List',
    prcount: 'The PRS Count is : ',
    checktable: 'Check the table Issue',
    sortbydate: 'Sort By Date: ',
    searchbycomment: 'Search By Comments',
    searchbystatus: 'Status List Filter: ',
    searchbyse: 'SE_List Filter: ',
    searchbyplatform: 'Platform Filter: ',
    showpicker: 'Show Picker',
    byapprove: 'BY Approve:',
    ahapprove: 'AH Approve:',
    htapprove: 'HT Approve:',
    pleaseselect: 'Please select a ',
    required: 'Required',
    releaseversion: 'Release Version',
    comment: 'Comment',
    prlink: 'PR_LINK',
    desc: 'desc',
    asc: 'asc',
    arrayofsort: ['asc', 'desc'],
    excelcol: [
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
  });
  arabicobject = observable.box<TLanguageObj>({
    addpage: 'صفحة الإضافة',
    excelpage: 'PR صفحة النتائج',
    arlang: 'العربية',
    enlang: 'الإنكليزية',
    addtext: 'اضافه',
    closetext: 'اغلاق',
    donetext: 'تم',
    nexttext: 'التالي',
    platformtext: 'منصه ',
    setext: 'SE قائمة',
    dificulitytext: 'صعوبات ',
    sizetext: 'حجم',
    statustext: 'قائمة الحالة',
    prcount: 'عدد PRS هو: ',
    checktable: 'تحقق من الجدول المشكلات',
    sortbydate: 'صنف حسب التاريخ: ',
    searchbycomment: 'البحث عن طريق التعليقات',
    searchbystatus: 'البحث عن قائمة الحالة: ',
    searchbyse: 'البحث عن SE_List :',
    searchbyplatform: 'البحث عن المنصة: ',
    showpicker: 'إظهار منتقي',
    byapprove: 'BY موافقة:',
    ahapprove: 'AH موافقة:',
    htapprove: 'HT موافقة:',
    pleaseselect: 'الرجاء اختيار ',
    required: 'مطلوب',
    releaseversion: 'النسخة الصادرة',
    comment: 'التعليق',
    prlink: 'رابط PR',
    desc: 'تنازلي',
    asc: 'تصاعدي',
    arrayofsort: ['تصاعدي', 'تنازلي'],
    excelcol: [
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
  });

  setLanguage = async (val: string) => {
    runInAction(() => {
      if (val === 'EN') {
        this.language.set(val);
        AsyncStorage.setItem(val, JSON.stringify(this.englishobject.get()));
      } else if (val === 'AR') {
        this.language.set(val);
        AsyncStorage.setItem(val, JSON.stringify(this.arabicobject.get()));
      }
    });
    const async1 = await AsyncStorage.getItem(val);
    this.translatedlang.set(JSON.parse(async1));
    let parse: TLanguageObj = JSON.parse(async1);
    return parse;
  };
}

const getLanguageStore = memoize(
  () => {
    const languagestoreMobx = new LanguageStore();
    return languagestoreMobx;
  },
  () => 1,
);

export default getLanguageStore;
