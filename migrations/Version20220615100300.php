<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220615100300 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE Mission ADD missionnaire_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE Mission ADD CONSTRAINT FK_9067F23C51E7A9AF FOREIGN KEY (missionnaire_id) REFERENCES missionnaire (id)');
        $this->addSql('CREATE INDEX IDX_9067F23C51E7A9AF ON mission (missionnaire_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE mission DROP FOREIGN KEY FK_9067F23C51E7A9AF');
        $this->addSql('DROP INDEX IDX_9067F23C51E7A9AF ON mission');
        $this->addSql('ALTER TABLE mission DROP missionnaire_id');
    }
}
