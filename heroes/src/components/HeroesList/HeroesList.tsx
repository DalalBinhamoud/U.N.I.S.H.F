import React, { useState, useEffect } from 'react'
import { Table, Layout as AntLayout, Typography, Col, Row, Button } from 'antd'
import styles from './HeroesList.module.scss'
import { useHeroesApis } from '../../services/heroes.service'
import { formatPhoneNumber, utilConsts } from '../../helpers'
import { CustomizeRenderEmpty } from '../../General/CustomizeRenderEmpty/CustomizeRenderEmpty'
import moment from 'moment'
import { getColumns } from './Widgets/getColumns'

import Filters from '../Filters'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

const HeroesList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { Text, Paragraph } = Typography
  const { getHeroes, heroes } = useHeroesApis()
  const { defaultFormat, showMonthName } = utilConsts.dateFormat()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { Sider: AntSider } = AntLayout
  // const { columns } = getColumns()

  const mockHeroes = [
    {
      id: 1,
      name: 'wade',
      phone: '3234567890',
      email: 'test@example.com',
      date: '2022-03-22',
      country: 'string',
      company: 'string',
    },
    {
      id: 2,
      name: 'devon',
      phone: '3234589011',
      email: 'test2@example.com',
      date: '2022-03-11',
      country: 'string',
      company: 'string',
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // filters: mockHeroes.map((hero) => hero.name),
      // onFilter: (value: any, record: any) => record.name.startsWith(value),
      // filterSearch: (input: any, record: any) =>
      //   record.value.indexOf(input) > -1,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (phone: string) => <Text>{formatPhoneNumber(phone)}</Text>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (email: string) => <Text underline={true}>{email}</Text>,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => (
        <Text>{moment(date, defaultFormat).format(showMonthName)}</Text>
      ),
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
  ]

  const paginationOnchange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    getHeroes()
  }, [])

  return (
    <Row gutter={16} className={styles['container']}>
      <Col span={8}>
        <AntSider
          theme="dark"
          collapsed={isCollapsed}
          width={'28rem'}
          breakpoint="lg"
          onBreakpoint={(broken: boolean) => {
            broken && setIsCollapsed(broken)
          }}
          collapsedWidth={50}
        >
          <Button
            type="primary"
            onClick={() => setIsCollapsed((p) => !p)}
            className={isCollapsed ? styles.btn : ''}
          >
            {React.createElement(
              isCollapsed ? MenuFoldOutlined : MenuUnfoldOutlined,
            )}
          </Button>
          <Filters />
        </AntSider>
      </Col>
      <Col span={15}>
        <Table
          title={() => <Paragraph strong>Heroes</Paragraph>}
          bordered={true}
          locale={{
            emptyText: () => <CustomizeRenderEmpty message={'no hero found'} />,
          }}
          pagination={{
            current: currentPage,
            size: 'small',
            showSizeChanger: false,
            hideOnSinglePage: true,
            position: ['bottomCenter'],
            onChange: paginationOnchange,
          }}
          columns={columns}
          dataSource={mockHeroes}
        />
      </Col>
    </Row>
  )
}
export default HeroesList
