import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useCall, useContractFunction } from '@usedapp/core';
import GameFiContractABI from '../abi/GameFiContractABI.json';
import { ContractAddressByRinkeby, ContractAddress } from '../contracts';

const GameFiContractABIInterface = new ethers.utils.Interface(GameFiContractABI);

const GameFiContract = new Contract(
  // ContractAddressByRinkeby,
  ContractAddress,
  GameFiContractABIInterface
);

export const useBaseURI = () => {
  // const { value, error } = useCall(ContractAddressByRinkeby && {
  //   contract: new Contract(ContractAddressByRinkeby, GameFiContractABIInterface),
  //   method: 'baseURI',
  //   args: []
  // }) ?? {}
  const { value, error } = useCall(ContractAddress && {
    contract: new Contract(ContractAddress, GameFiContractABIInterface),
    method: 'baseURI',
    args: []
  }) ?? {}
  if(error) {
    return undefined
  }
  return value;
};

export const useApprove  = () => {
  const { state, send, event } = useContractFunction(
    GameFiContract,
    'approve',
    {}
  );
  return { state, send, event };
};