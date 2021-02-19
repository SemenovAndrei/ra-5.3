import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  width: 200px;
  padding: 10px;
  border: 2px solid #bebebe;
  border-radius: 6px;
`

const Title = styled.h2`
  margin: 0;
  text-align: center;
`

const Text = styled.p`
  font-size: 20px;
  opacity: 1;
  transition: opacity 0.2s linear;

  &.collapse {
    font-size: 0;
    opacity: 0;
    transition: font-size 0.25s linear;
  }
`

const Button = styled.button`
  cursor: pointer;
  border-style: none;
  border-bottom: 1px dashed grey;
  background-color: inherit;
  font-size: 1rem;
`

function Card(props) {
  const onToggle = (event) => {
    event.target.blur()
    props.onToggle()
  }

  return (
    <Container>
      <Title>{props.title}</Title>
      <Text className={props.hide ? 'collapse' : 'expand'}>{props.text}</Text>
      <Button onClick={onToggle}>{props.hide ? 'Show ˅' : 'Hide ˄'}</Button>
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  hide: PropTypes.bool.isRequired,
}

export default Card
