import React from 'react'
import { storiesOf } from '@storybook/react'
import RadioGroup from '../src/components/RadioGroup'

class RadioGroupState extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  render () {
    const options = [
      {
        name: 'Prédio',
        value: 'predio',
      },
      {
        name: 'Casa',
        value: 'casa',
      },
      {
        name: 'Sofá',
        value: 'sofa',
      },
    ]

    return (
      <div>
        <RadioGroup
          options={options}
          name="artefatos"
          onChange={e => this.setState({ value: e.target.value })}
          value={this.state.value}
          disabled={this.props.disabled}
          error={this.props.error}
          success={this.props.success}
        />

        <p>Selecionado: {this.state.value}</p>
      </div>
    )
  }
}

storiesOf('RadioGroup', module)
  .add('disabled', () => <RadioGroupState disabled />)
  .add('default', () => <RadioGroupState />)
  .add('success', () => <RadioGroupState success="Sucesso!" />)
  .add('error', () => <RadioGroupState error="Erro!" />)
