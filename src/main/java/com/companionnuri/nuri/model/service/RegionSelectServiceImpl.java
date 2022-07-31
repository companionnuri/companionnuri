package com.companionnuri.nuri.model.service;

import com.companionnuri.nuri.model.dto.SidoDto;
import com.companionnuri.nuri.model.dto.SigunguDto;
import com.companionnuri.nuri.model.mapper.RegionSelectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RegionSelectServiceImpl implements RegionSelectService {

    private final RegionSelectMapper regionSelectMapper;

    @Override
    public List<SidoDto> getSidoList() {
        return regionSelectMapper.getSidoList();
    }

    @Override
    public List<SigunguDto> getSigunguList(int sidoCode) {
        return regionSelectMapper.getSigunguList(sidoCode);
    }
}
