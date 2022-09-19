package br.com.wichstream.api.repositories;

import br.com.wichstream.api.models.Stream;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StreamRepository extends JpaRepository<Stream, Integer> {
}
