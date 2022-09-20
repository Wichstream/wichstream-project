package br.com.wichstream.api.services;

import br.com.wichstream.api.models.Content;

import java.util.List;

public interface ContentService {
    public Content saveContent(Content content);
    public List<Content> getAllContents();
}
