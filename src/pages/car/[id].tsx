import { NextPage } from 'next'
import { useRouter } from 'next/router';
import React from 'react'

const CarPage:NextPage = () => {
	const { query } = useRouter();

  console.log(query);
  return (
	<div>CarPage</div>
  )
}

export default CarPage