import { Injectable } from '@nestjs/common';
import { db } from 'src/database/database.provider';
import { CreateCardDto } from 'src/modules/cards/dto/create-card.dto';

@Injectable()
export class CardsRepository {
  
  async insertCard(createCardDto: CreateCardDto) {
    const { id, videoImageSrc, autoplay } = createCardDto;
    const result = await db.query(
      `INSERT INTO cards (id, video_image_src, autoplay)
       VALUES ($1, $2, $3)
       ON CONFLICT (id) DO NOTHING
       RETURNING *`,
      [id, videoImageSrc, autoplay],
    );
    return result.rows[0];
  }

  async findAll() {
    const result = await db.query(`SELECT * FROM cards ORDER BY id ASC`);
    return result.rows.map(row => ({
      id: row.id,
      videoImageSrc: row.video_image_src,
      autoplay: row.autoplay,
    }));
  }

  async deleteCard(id: number) {
    const result = await db.query(`DELETE FROM cards WHERE id = $1`, [id]);
    return result.rows[0];
  }
}
