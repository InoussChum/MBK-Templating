import {
    PiHouseLineDuotone,
    PiUsersThreeDuotone,
} from 'react-icons/pi'
import type { JSX } from 'react'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    dashboard: <PiHouseLineDuotone />,
    donors: <PiUsersThreeDuotone />,
}

export default navigationIcon
