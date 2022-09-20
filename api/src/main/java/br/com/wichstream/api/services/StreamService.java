package br.com.wichstream.api.services;

import br.com.wichstream.api.models.Stream;

import java.util.List;

public interface StreamService {
    public Stream saveStream(Stream stream);
    public List<Stream> getAllStreams();
}