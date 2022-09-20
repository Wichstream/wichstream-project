package br.com.wichstream.api.services;

import br.com.wichstream.api.models.Provider;

import java.util.List;

public interface ProviderService {
    public Provider saveProvider(Provider provider);
    public List<Provider> getAllProviders();
}
