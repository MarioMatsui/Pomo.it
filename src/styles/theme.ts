export interface Theme {
    white: string;
    background: string;
    grayLine: string;
    text: string;
    textHighlight: string;
    title: string;
    red: string;
    green: string;
    blue: string;
    blueDark: string;
    blueTwitter: string;
    orange: string;
}

export const themes: { [key: string]: Theme } = {
    light: {
        white: '#fff',
        background: '#F2F3F5',
        grayLine: '#DCDDE0',
        text: '#666666',
        textHighlight: '#B3B9FF',
        title: '#2E384D',
        red: '#E83F5B',
        green: '#56D73F',
        blue: '#C69D82',
        blueDark: '#C57D19',
        blueTwitter: '#2AA9E0',
        orange: '#fa860f'
    },
    dark: {
        white: '#0d1c2e',
        background: '#05121f',
        grayLine: '#DCDDE0',
        text: '#666666',
        textHighlight: '#B3B9FF',
        title: '#fff',
        red: '#E83F5B',
        green: '#56D73F',
        blue: '#fa860f',
        blueDark: '#C57D19',
        blueTwitter: '#2AA9E0',
        orange: '#fa860f',
    }
}