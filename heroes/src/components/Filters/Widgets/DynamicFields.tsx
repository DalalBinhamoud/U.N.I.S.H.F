import React from 'react'
import { Select, Input, DatePicker } from 'antd'
import { CustomizeRenderEmpty } from '../../../General/CustomizeRenderEmpty/CustomizeRenderEmpty'
import { utilConsts } from '../../../helpers'
import { IFilterField } from '../../../interfaces/IFilterField'
import { useFilterFieldsApis } from '../../../services/filterFields.service'

const DynamicFields = () => {
  const { date, dropdown } = utilConsts.filterFieldsTypes()
  const { getDropdownOpts, options } = useFilterFieldsApis()
  // create input field
  const createTextField = (title: string, index: number) => {
    return <Input key={`${title}-${index}`} />
  }

  // Select
  const createDropDown = (fieldInfo: IFilterField, index: number) => {
    const { title, api, multiple } = fieldInfo
    if (api) {
      getDropdownOpts(api)
    }

    return (
      <Select
        mode={multiple ? 'multiple' : 'tags'}
        key={`${title}-${index}`}
        notFoundContent={<CustomizeRenderEmpty message={'no data found'} />}
      >
        {options.map((option: any, optionIndex: number) => {
          return (
            <Select.Option
              key={`${option.Name}-${optionIndex}`}
              name={option.Name}
              value={option.Name}
            >
              {option.Name}
            </Select.Option>
          )
        })}
      </Select>
    )
  }

  const createDatePicker = (title: string, index: number) => {
    return <DatePicker key={`${title}-${index}`} showToday={true} />
  }

  const createDynamicField = (fieldInfo: IFilterField, filedIndex: number) => {
    switch (fieldInfo.type) {
      case dropdown:
        return createDropDown(fieldInfo, filedIndex)
      case date:
        return createDatePicker(fieldInfo.title, filedIndex)
      default:
        return createTextField(fieldInfo.title, filedIndex)
    }
  }

  return {
    createDynamicField,
  }
}

export default DynamicFields
