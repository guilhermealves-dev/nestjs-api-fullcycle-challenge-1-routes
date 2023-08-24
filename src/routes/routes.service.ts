import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class RoutesService {
  constructor(private prismaService: PrismaService) {}

  async create(createRouteDto: CreateRouteDto) {
    return await this.prismaService.route.create({ data: createRouteDto });
  }

  async findAll() {
    return await this.prismaService.route.findMany();
  }
}
