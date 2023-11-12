import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import timezones from 'timezones-list';

const TimeZoneList = () => {
    useEffect(() => {
        getTimeZone();
    }, []);

    const getTimeZone = async () => {
        try {
            var timez = await require('timezones-list').getTimezones();
            console.log(timez);
        } catch (error) {
            console.error("Error getting time zones:", error);
        }
    }

    return (
        <View>
            <Text>TimeZoneList</Text>
        </View>
    );
}

export default TimeZoneList;
