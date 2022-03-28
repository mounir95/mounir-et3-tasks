import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FilterByComment from './FitlerByComment';
import FilterByStatus from './FilterByStatus';
import FilterBySE from './FilterBySE';
import FilterByPlatform from './FilterByPlatform';
import getExcelStore from '../../../../../stores/ExcelStore';
import getFilterStore from '../../../../../stores/FilterStore';
import {observer} from 'mobx-react';
import {colors, windowWidth} from '../../../../../constants/constants';

const Filters = observer(() => {
  const pressFilter = () => {
    getExcelStore().openFilterForm();
    getExcelStore().filteredArrayFun();
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          paddingVertical: windowWidth * 0.0084,
          paddingHorizontal: windowWidth * 0.0084,
          backgroundColor: colors.white,
        }}
        onPress={() => pressFilter()}>
        {getExcelStore().filterfalse.get() && (
          <FontAwesome
            style={{textAlign: 'right'}}
            name="window-minimize"
            size={windowWidth * 0.042}
            color={colors.ninehund}
          />
        )}
        {!getExcelStore().filterfalse.get() && (
          <Icon
            style={{textAlign: 'right'}}
            name="md-add"
            size={windowWidth * 0.056}
            color={colors.ninehund}
          />
        )}
      </TouchableOpacity>
      {getExcelStore().filterfalse.get() && (
        <View
          style={{
            marginBottom: windowWidth * 0.013,
            backgroundColor: colors.lavender,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: windowWidth * 0.041,
              marginBottom: windowWidth * 0.041,
            }}>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: windowWidth * 0.041,
                marginRight: windowWidth * 0.03,
              }}>
              <FilterByStatus
                statusFilter={(event: React.ChangeEvent) =>
                  getFilterStore().filterStatusFun(event)
                }
                filterchoosed={getFilterStore().status.get()}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: windowWidth * 0.03,
                marginRight: windowWidth * 0.03,
              }}>
              <FilterBySE
                seListFilter={(event: React.ChangeEvent) =>
                  getFilterStore().filterSElistFun(event)
                }
                filterchoosed={getFilterStore().se.get()}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: windowWidth * 0.03,
                marginRight: windowWidth * 0.0014,
              }}>
              <FilterByPlatform
                platformFilter={(event: React.ChangeEvent) =>
                  getFilterStore().filterPlatformFun(event)
                }
                filterchoosed={getFilterStore().platform.get()}
              />
            </View>
          </View>
          <FilterByComment
            textChanged={(event: string) =>
              getFilterStore().textChangedFun(event)
            }
            filterchoosed={getFilterStore().comment.get()}
          />
        </View>
      )}
    </View>
  );
});

export default Filters;
