const initialState = {
    sliderElements: [
        {
            id: 1,
            title: 'Областное казённое учреждение',
            text: 'Областное казённое учреждение Центр занятости населения города Карталы предоставляет государственные услуги в сфере поиска подходящей работы для граждан.',
            link: '/about',
            image: 'city'
        },
        {
            id: 2,
            title: 'Опрос для граждан и работодателей',
            text: 'Центр занятости населения города Карталы проводит опрос граждан и работодателей по удовлетворенности полнотой, доступностью и качеством получаемых государственных услуг.',
            link: '/interview',
            image: 'checkbox'
        },
        {
            id: 3,
            title: 'Временное трудоустройство',
            text: 'Временное трудоустройство безработных граждан, испытывающих трудности в поиске работы. Служба занятости организует временные работы для трудоустройства безработных граждан.',
            link: '/temporary-employment',
            image: 'handshake'
        },
        {
            id: 4,
            title: 'Порядок обжалования',
            text: 'Судебный и административный порядок обжалования нормативных правовых актов, решений Главного управления по труду и занятости населения Челябинской области, действий (бездействия) должностных лиц.',
            link: '/legislation/appeal-procedure',
            image: 'judge'
        }
    ]
};
export const SurfaceBlockReducer = (state = initialState, action) => state;