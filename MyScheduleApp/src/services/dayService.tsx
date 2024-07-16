import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import 'dayjs/locale/ko' // import locale
import { Text } from 'react-native'

dayjs.extend(isLeapYear) // use plugin
dayjs.locale('ko') // use locale 



export default function WhatDayToday() {
        const now = dayjs();
        const today = now.format('YYYY년 MM월 DD일')
        const whatDay = dayjs(new Date()).format('dddd');

        return { today, whatDay }
}
