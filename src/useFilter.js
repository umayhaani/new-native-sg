import React, {useCallback, useState,useEffect} from 'react';
import { useQuery,gql, useLazyQuery } from '@apollo/client';
 




export const useFilter = (page,skill,search,Location,BudgetMin,BudgetMax,BudgetType,Experience)=>{
    // console.log(page,skill,search,Location,BudgetMin,BudgetMax,BudgetType,Experience," all..")
const GET_CHARACTERS = gql`
query{
  skilllistings(
   _perPage : 5,
   _page : ${page},
   GigType: "${skill}",
   search : "Nurse",
   Location : null,
   BudgetMin : "${BudgetMin}",
   BudgetMax : "${BudgetMax}",
   BudgetType :"${BudgetType}",
   Experience:"${Experience}",
  ){
    aggregate {
      count
      totalCount
    },
    data {
      _id
      ProfileId
      Title
      CreatedBy
      ModifiedBy
      IsActive
       Description
      Skills
      GigType
      MinimumBid
      users {name,email,profile {PictureUrl,ExperienceLevelName,LastLoginDate, LastSuccessfulLoginDate}}
    }
  }
}
`;

    const [userInfo,setUserInfo] = useState()
    const [getCardDetail,{error,loading,data}]=useLazyQuery(GET_CHARACTERS,{onCompleted: setUserInfo})
    return{
        error,loading,data,getCardDetail,userInfo
    }
}