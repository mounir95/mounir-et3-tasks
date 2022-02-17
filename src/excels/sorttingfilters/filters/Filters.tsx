import React, {FC, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FilterByComment from './FitlerByComment';
import FilterByStatus from './FilterByStatus';
import FilterBySE from './FilterBySE';
import FilterByPlatform from './FilterByPlatform';

type Props = {
  pressfilter: Function;
  openfilter: Boolean;
  textChanged: Function;
  filterPlatform: Function;
  filterSElist: Function;
  filterStatus: Function;
};

const Filters: FC<Props> = ({
  openfilter,
  pressfilter,
  textChanged,
  filterPlatform,
  filterSElist,
  filterStatus,
}) => {
  const [{platform, se, status, comment}, changefilter] = useState({
    platform: true,
    se: true,
    status: true,
    comment: true,
  });

  const filterStatusFun = (event: React.ChangeEvent) => {
    filterStatus(event);
    changefilter(
      val =>
        (val = {
          platform: !platform,
          se: !se,
          status: status,
          comment: !comment,
        }),
    );
  };

  const filterSElistFun = (event: React.ChangeEvent) => {
    filterSElist(event);
    changefilter(
      val =>
        (val = {
          platform: !platform,
          se: se,
          status: !status,
          comment: !comment,
        }),
    );
  };

  const filterPlatformFun = (event: React.ChangeEvent) => {
    filterPlatform(event);
    changefilter(
      val =>
        (val = {
          platform: platform,
          se: !se,
          status: !status,
          comment: !comment,
        }),
    );
  };

  const textChangedFun = (event: string) => {
    textChanged(event)
      changefilter(
      val =>
        (val = {
          platform: !platform,
          se: !se,
          status: !status,
          comment: comment,
        }),
    );
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          paddingVertical: 3,
          paddingHorizontal: 3,
          backgroundColor: 'white',
        }}
        onPress={() => pressfilter()}>
        {openfilter && (
          <FontAwesome
            style={{textAlign: 'right'}}
            name="window-minimize"
            size={15}
            color="#900"
          />
        )}
        {!openfilter && (
          <Icon
            style={{textAlign: 'right'}}
            name="md-add"
            size={20}
            color="#900"
          />
        )}
      </TouchableOpacity>
      {openfilter && (
        <View style={{marginBottom: 5, backgroundColor: 'lavender'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 15,
              marginBottom: 15,
            }}>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 15,
                marginRight: 10,
              }}>
              <FilterByStatus
                statusFilter={(event: React.ChangeEvent) =>
                  filterStatusFun(event)
                }
                filterchoosed={status}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 10,
                marginRight: 10,
              }}>
              <FilterBySE
                seListFilter={(event: React.ChangeEvent) =>
                  filterSElistFun(event)
                }
                filterchoosed={se}
              />
            </View>
            <View
              style={{flexDirection: 'column', marginLeft: 10, marginRight: 5}}>
              <FilterByPlatform
                platformFilter={(event: React.ChangeEvent) =>
                  filterPlatformFun(event)
                }
                filterchoosed={platform}
              />
            </View>
          </View>
          <FilterByComment
            textChanged={(event: string) => textChangedFun(event)}
            filterchoosed={comment}
          />
        </View>
      )}
    </View>
  );
};

export default Filters;
