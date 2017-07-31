import React from 'react'
import { Icon } from 'antd-mobile'

import '../../styles/knowledge-index.scss'

const KnowledgeIndex = () => {
  const knowledgeDatas = [
    { img: require('../../img/knowledge_banner_1.png'), num: '1,871,767', id: '1' },
    { img: require('../../img/knowledge_banner_1.png'), num: '2,871,767', id: '2' },
    { img: require('../../img/knowledge_banner_1.png'), num: '3,871,767', id: '3' },
    { img: require('../../img/knowledge_banner_1.png'), num: '4,871,767', id: '4' },
  ]
  return (
    <div className='knowlege-index'>
      <h1 className='s_container'>
        <Icon type='down' size='md' />
        没有什么事情会阻碍我们
      </h1>
      {
        knowledgeDatas && knowledgeDatas.length > 0 &&
        <div className='knowledge-list-container'>
          <ul className='knowledge-list'>
            {
              knowledgeDatas.map(item => <KnowledgeItem key={ item.id } { ...{ ...item } } />)
            }
          </ul>
        </div>
      }
      <h1 className='s_container to-select'>
        <Icon type='down' size='md' />
        选择知识库
      </h1>
      <h1 className='s_container selected'>
        <Icon type='down' size='md' />
        我选好了
      </h1>
    </div>
  )
}

export default KnowledgeIndex

class KnowledgeItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
    this.types = ['常用', '进阶', '专家']
  }
  handleClick(currentIndex) {
    this.setState({ currentIndex })
  }
  render() {
    const { img, num } = this.props
    const { currentIndex } = this.state
    return (
      <li className='knowledge-item'>
        <p className='img'><img src={ img } alt='knowlege' /></p>
        <div className='type'>
          {
            this.types.map((item, index) => <div className={ currentIndex === index ? 'active type-item' : 'type-item' } key={ item } onClick={ () => { if (currentIndex !== index) { this.handleClick(index) } } }><Icon type={ currentIndex === index ? 'up' : 'down' } size='md' /><span>{ item }</span></div>)
          }
        </div>
        <p className='number'>共有<span>{ num }</span>人添加该库</p>
        <p className='knowledge-item-button'>
          <Icon type='down' size='md' />
          添加
        </p>
      </li>
    )
  }
}
