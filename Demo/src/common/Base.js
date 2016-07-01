
import {
    PixelRatio,
    ActivityIndicatorIOS,
    Dimensions
} from 'react-native'

export default {

    pixel:1/PixelRatio.get(),

    size: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    }

}

