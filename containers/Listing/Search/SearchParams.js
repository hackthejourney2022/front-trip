// default data for filter elements
export const priceInit = {
  0: '$0',
  100: '$100',
};

export const calenderItem = {
  separator: '-',
  format: 'DD-MM-YYYY',
  locale: 'pt-BR',
};

export const getAmenities = {
  id: 1,
  name: 'Exibir lista por:',
  identifier: 'amenities',
  options: [
    { label: 'Recomendações para mim', value: 'rc' },
    { label: 'Onde nossos nômades estão', value: 'ns' },
  ],
};

export const getPropertyType = {
  id: 2,
  name: 'Tipo de Acomodação',
  identifier: 'property-type',
  options: [
    { label: 'Villa', value: 'villa' },
    { label: 'Hotel', value: 'hotel' },
    { label: 'Resort', value: 'resort' },
    { label: 'Hostel', value: 'landscape' },
  ],
};
