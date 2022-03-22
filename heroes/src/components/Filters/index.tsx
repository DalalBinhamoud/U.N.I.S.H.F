import React, { FC, useEffect, useState } from 'react'
import {
  Card,
  Select,
  DatePicker,
  Form,
  Typography,
  Input,
  InputNumber,
} from 'antd'
import { FilterOutlined, SearchOutlined } from '@ant-design/icons'
import styles from './Filters.module.scss'
import { FormInstance } from 'antd/lib/form'
import moment from 'moment'
import DynamicFields from './Widgets/DynamicFields'

const Filters = () => {
  const { Paragraph } = Typography
  const { Option } = Select
  const [isDate, setIsDate] = useState(false)
  const { createDynamicField } = DynamicFields()

  const mockFields = [
    {
      title: 'Email',
      type: 'text',
    },
    {
      title: 'Phone',
      type: 'text',
    },
    {
      title: 'Name',
      type: 'text',
    },
    {
      title: 'Company',
      type: 'text',
    },
    {
      title: 'country',
      type: 'dropdown',
      api:
        'http://countryapi.gear.host/v1/Country/getCountries?pLimit=25&pPage=1',
      multiple: false,
    },
    {
      title: 'Date',
      type: 'date',
    },
  ]

  // const action = (actions: string[]) => {
  //   const index = actions.indexOf(null)
  //   if (actions.includes(null) && actions.length > 1 && index === 0) {
  //     actions.splice(index, 1)
  //   }
  // }

  // useEffect(() => {
  //   if (dateTitleExist) {
  //     setIsDate(true)
  //   }
  // }, [filterFields])

  // const getTranslationType = (translationType: string, keyName: string) => {
  //   switch (translationType) {
  //     case 'RECORDS':
  //       return t(`records:${keyName}`)
  //     case 'DELEGATION':
  //       return t(`delegations:${keyName}`)
  //     case 'SELF_ASSESSMENT':
  //       return t(`submissionStatus:${keyName}`)
  //     case 'EXTERNAL_ASSESSMENT':
  //       return t(`externalAssessment:${keyName}`)
  //     default:
  //       return t(`filter:${keyName}`)
  //   }
  // }

  // const getOptionValue = (isFilterById: boolean, option: any) => {
  //   if (isFilterById) {
  //     return option.id
  //   }

  //   if (option.username) {
  //     return option.username
  //   } else if (option.name) {
  //     return getSelectedLanguageTxt(i18n.language, option.name, option.nameEn)
  //   } else {
  //     return option
  //   }
  // }

  return (
    <Card title="FILTERS" className={styles['card__title']}>
      <Form
        layout="vertical"
        // form={formFilter}
      >
        {/* <Paragraph>
          <FilterOutlined className={styles['filter-icon']} /> {t('FILTER')}
        </Paragraph>
        {filterFields.map((item: any, index: number) => {
          return item.formInputType === 'select' ? (
            <Form.Item
              key={index}
              className={styles[item.formItemClassName]}
              label={item.formItemLabel}
              name={item.formItemName}
            >
              <Select
                disabled={item.formInputDisable}
                showSearch
                showArrow
                onSelect={(e) => {
                  onSelect({
                    fieldValue: e,
                    selectedFiled: item.formItemName,
                  })
                }}
                onChange={(e) => {
                  action(e)
                  onSelectChange(e, item.formItemName)
                }}
                notFoundContent={
                  <CustomizeRenderEmpty message={t('NO_DATA')} />
                }
                optionFilterProp="label"
                defaultValue={null}
                mode={item.formInputMode}
              >
                <Option key="all" label={t('ALL')} value={null}>
                  {t('ALL')}
                </Option>
                {item.formInputOptions &&
                  item.formInputOptions.length > 0 &&
                  item.formInputOptions.map((option: any, index: number) => {
                    return (
                      <Option
                        key={index}
                        label={option.name ? option.name : option}
                        value={getOptionValue(item.filterById, option)}
                        name={option.name ? option.name : option}
                      >
                        {getTranslationType(
                          item.translationType,
                          option.name ? option.name : option,
                        )}
                      </Option>
                    )
                  })}
              </Select>
            </Form.Item>
          ) : item.formInputType === 'search' ? (
            <Form.Item
              key={index}
              className={styles[item.formItemClassName]}
              label={item.formItemLabel}
              name={item.formItemName}
            >
              <Input
                disabled={item.formInputDisable}
                defaultValue={null}
                placeholder={item.formItemPlaceholder}
                allowClear
                onChange={(e) => {
                  onSearch({
                    fieldValue: e.target.value,
                    selectedFiled: item.formItemName,
                  })
                }}
                suffix={<SearchOutlined />}
              />
            </Form.Item>
          ) : (
            item.formInputType === 'number' && (
              <Form.Item
                className={styles[item.formItemClassName]}
                key={index}
                label={item.formItemLabel}
                name={item.formItemName}
              >
                <InputNumber
                  min={0}
                  max={inputsMaxLength().inputNumber}
                  onChange={(e) => {
                    onNumberSearch({
                      fieldValue: (e + '').replace(/[^0-9]/g, ''),
                      selectedFiled: item.formItemName,
                    })
                  }}
                />
              </Form.Item>
            )
          )
        })}

        {isDate && <Paragraph>{t('CREATION_DATE')}</Paragraph>}
        {filterFields.map((item: any, index: number) => {
          return (
            item.formInputType === 'date' && (
              <>
                {item.formToTitle && <Paragraph>{item.formToTitle}</Paragraph>}
                <Form.Item
                  key={index}
                  className={styles[item.formItemClassName]}
                  label={item.formItemLabel}
                  name={item.formItemName}
                >
                  <DatePicker
                    disabled={item.formInputDisable}
                    placeholder=""
                    onChange={(e) => {
                      onChange({
                        date: moment(e).format('yyyy-MM-DD'),
                        selectedFiled: item.formItemName,
                      })
                    }}
                    disabledDate={(current: moment.Moment) => {
                      if (item.checkForDisableDate) {
                        return disabledDate(current, item.formItemName)
                      }
                    }}
                    className={styles[item.formInputClassName]}
                  />
                </Form.Item>
              </>
            )
          )
        })} */}
        {mockFields?.map((fieldInfo, index) => {
          return (
            <Form.Item
              key={index}
              name={fieldInfo.title}
              label={fieldInfo.title}
            >
              {createDynamicField(fieldInfo, index)}
            </Form.Item>
          )
        })}
      </Form>
    </Card>
  )
}

export default Filters
