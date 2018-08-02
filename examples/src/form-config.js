const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  {
    value: 'blue', label: 'Blue', color: '#0052CC', disabled: true,
  },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
]

export default [
  {
    id: 'simple',
    type: 'react-select',
    displayName: 'Simple Dropdown',
    resultPath: 'simple',
    componentProps: {
      options: colourOptions,
    },
  },
  {
    id: 'simple-multi',
    type: 'react-select',
    displayName: 'Simple Dropdown(Multi)',
    resultPath: 'simpleMulti',
    componentProps: {
      isMulti: true,
      options: colourOptions,
    },
  },
  {
    id: 'creatable',
    type: 'react-select-creatable',
    displayName: 'Creatable Dropdown',
    resultPath: 'creatable',
    componentProps: {
      options: colourOptions,
    },
  },
  {
    id: 'creatable-multi',
    type: 'react-select-creatable',
    displayName: 'Creatable Dropdown(Multi)',
    resultPath: 'creatableMulti',
    componentProps: {
      isMulti: true,
      options: colourOptions,
    },
  },
  {
    id: 'async',
    type: 'react-select-async',
    displayName: 'Async Dropdown',
    resultPath: 'async',
    componentProps: {
      loadOptions: input => new Promise((resolve) => {
        setTimeout(() => {
          resolve(colourOptions.filter(e => e.label.toLowerCase().includes(input)));
        }, 500);
      }),
    },
  },
  {
    id: 'async-multi',
    type: 'react-select-async',
    displayName: 'Async Dropdown(Multi)',
    resultPath: 'asyncMulti',
    componentProps: {
      isMulti: true,
      loadOptions: input => new Promise((resolve) => {
        setTimeout(() => {
          resolve(colourOptions.filter(e => e.label.toLowerCase().includes(input)));
        }, 500);
      }),
    },
  },
  {
    id: 'async-creatable',
    type: 'react-select-async-creatable',
    displayName: 'Async Dropdown Creatable',
    resultPath: 'asyncCreatable',
    componentProps: {
      loadOptions: input => new Promise((resolve) => {
        setTimeout(() => {
          resolve(colourOptions.filter(e => e.label.toLowerCase().includes(input)));
        }, 500);
      }),
    },
  },
  {
    id: 'async-creatable-multi',
    type: 'react-select-async-creatable',
    displayName: 'Async Dropdown Creatable(Multi)',
    resultPath: 'asyncCreatableMulti',
    componentProps: {
      isMulti: true,
      loadOptions: input => new Promise((resolve) => {
        setTimeout(() => {
          resolve(colourOptions.filter(e => e.label.toLowerCase().includes(input)));
        }, 500);
      }),
    },
  },
]
