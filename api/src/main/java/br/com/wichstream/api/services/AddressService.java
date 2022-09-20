package br.com.wichstream.api.services;

import br.com.wichstream.api.models.Address;

import java.util.List;

public interface AddressService {
    public Address saveAddress(Address address);
    public List<Address> getAllAddress();
}