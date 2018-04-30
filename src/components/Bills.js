import React from 'react'
import { Bill } from './'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Masonry from 'react-masonry-component';

const query = gql`
  {
    allBills {
      id
      name
    }
  }
`

const Bills = (props) => {
  return (
    <Query query={ query }>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <Masonry>
            {
              data.allBills.map(bill => (
                <Bill name={ bill.name } key={ bill.id }/>
              ))
            }
          </Masonry>
        )
      }}


    </Query>
  )
}

export default Bills