package br.com.wichstream.api.repositories;

import br.com.wichstream.api.models.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ProviderRepository extends JpaRepository<Provider, Integer> {
}
